import React, { useState } from 'react';
import  './ShoppingCart.css'

const ShoppingCart = () => {
    // Initial state of cart items
    const [cart, setCart] = useState([]);

    // Function to add an item to the cart
    const addItem = (item) => {
        const itemExists = cart.find((cartItem) => cartItem.id === item.id);
        if (itemExists) {
            // If item already exists, update its quantity
            setCart(cart.map((cartItem) => 
                cartItem.id === item.id 
                    ? { ...cartItem, quantity: cartItem.quantity + 1 }
                    : cartItem
            ));
        } else {
            // If item does not exist, add it with quantity 1
            setCart([...cart, { ...item, quantity: 1 }]);
        }
    };

    // Function to remove an item from the cart
    const removeItem = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    };

    // Function to update the quantity of an item
    const updateQuantity = (id, quantity) => {
        setCart(
            cart.map((item) =>
                item.id === id ? { ...item, quantity: quantity } : item
            )
        );
    };

    return (
        <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
            <h2>Shopping Cart</h2>
            <button onClick={() => addItem({ id: 1, name: 'Item 1' })} className="add-item-button">
    Add Item 1
</button>
<button onClick={() => addItem({ id: 2, name: 'Item 2' })} className="add-item-button">
    Add Item 2
</button>

            {cart.length > 0 ? (
                <div>
                    {cart.map((item) => (
                        <div key={item.id} style={{ margin: '10px 0' }}>
                            <p>
                                <strong>{item.name}</strong> (Quantity: {item.quantity})
                            </p>
                            <input
                                type="number"
                                min="1"
                                value={item.quantity}
                                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                                style={{ width: '50px', marginRight: '10px' }}
                            />
                            <button onClick={() => removeItem(item.id)} className="add-remove-button">
    Remove
</button>
                        </div>
                    ))}
                </div>
            ) : (
                <p>Your cart is empty.</p>
            )}
        </div>
    );
};

export default ShoppingCart;
