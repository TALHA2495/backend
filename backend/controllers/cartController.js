import Cart from "../models/Cart.js";

export const getCart = async (req, res) => {
    try {
        let cart = await Cart.findOne({ userId: req.user.id });
        if (!cart) {
            cart = await Cart.create({ userId: req.user.id, items: [] });
        }
        res.json(cart);
    } catch (error) {
        res.status(500).json({ message: "Error fetching cart", error: error.message });
    }
};

export const syncCart = async (req, res) => {
    try {
        const { items } = req.body; // Items from localStorage
        let cart = await Cart.findOne({ userId: req.user.id });

        if (!cart) {
            cart = new Cart({ userId: req.user.id, items: [] });
        }

        // Merge logic: If item exists, update quantity, else add new
        items.forEach((localItem) => {
            const existingItem = cart.items.find(
                (item) => item.productId.toString() === localItem._id
            );
            if (existingItem) {
                existingItem.quantity = Math.max(existingItem.quantity, localItem.quantity);
            } else {
                cart.items.push({
                    productId: localItem._id,
                    quantity: localItem.quantity,
                    name: localItem.name,
                    price: localItem.price,
                    image: localItem.image || (localItem.images && localItem.images[0]),
                });
            }
        });

        await cart.save();
        res.json(cart);
    } catch (error) {
        res.status(500).json({ message: "Error syncing cart", error: error.message });
    }
};

export const addToCart = async (req, res) => {
    try {
        const { productId, quantity, name, price, image } = req.body;
        let cart = await Cart.findOne({ userId: req.user.id });

        if (!cart) {
            cart = new Cart({ userId: req.user.id, items: [] });
        }

        const existingItem = cart.items.find(
            (item) => item.productId.toString() === productId
        );

        if (existingItem) {
            existingItem.quantity += quantity || 1;
        } else {
            cart.items.push({ productId, quantity: quantity || 1, name, price, image });
        }

        await cart.save();
        res.json(cart);
    } catch (error) {
        res.status(500).json({ message: "Error adding to cart", error: error.message });
    }
};

export const removeFromCart = async (req, res) => {
    try {
        const { productId } = req.params;
        let cart = await Cart.findOne({ userId: req.user.id });

        if (cart) {
            cart.items = cart.items.filter(
                (item) => item.productId.toString() !== productId
            );
            await cart.save();
        }
        res.json(cart);
    } catch (error) {
        res.status(500).json({ message: "Error removing from cart", error: error.message });
    }
};

export const updateQuantity = async (req, res) => {
    try {
        const { productId, quantity } = req.body;
        let cart = await Cart.findOne({ userId: req.user.id });

        if (cart) {
            const item = cart.items.find(
                (item) => item.productId.toString() === productId
            );
            if (item) {
                item.quantity = quantity;
                if (item.quantity <= 0) {
                    cart.items = cart.items.filter(
                        (i) => i.productId.toString() !== productId
                    );
                }
                await cart.save();
            }
        }
        res.json(cart);
    } catch (error) {
        res.status(500).json({ message: "Error updating quantity", error: error.message });
    }
};

export const clearCart = async (req, res) => {
    try {
        let cart = await Cart.findOne({ userId: req.user.id });
        if (cart) {
            cart.items = [];
            await cart.save();
        }
        res.json({ message: "Cart cleared" });
    } catch (error) {
        res.status(500).json({ message: "Error clearing cart", error: error.message });
    }
};
