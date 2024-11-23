import React, { useState } from 'react';
import { FaShippingFast, FaPlusCircle, FaEdit, FaTrashAlt } from 'react-icons/fa';
import './Shipping.css';

const Shipping = () => {
    const [shippingMethods, setShippingMethods] = useState([
        { id: 1, name: 'Standard Shipping', cost: 'Free', icon: <FaShippingFast /> },
        { id: 2, name: 'Express Shipping', cost: '$10', icon: <FaShippingFast /> },
    ]);

    const [newMethod, setNewMethod] = useState({ name: '', cost: '' });
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [currentMethod, setCurrentMethod] = useState(null);

    const handleAddMethod = () => {
        if (newMethod.name.trim() && newMethod.cost.trim()) {
            const newMethodObj = {
                id: Date.now(),
                name: newMethod.name,
                cost: newMethod.cost,
                icon: <FaShippingFast />, // Optionally, can allow users to choose icons later
            };
            setShippingMethods([...shippingMethods, newMethodObj]);
            setNewMethod({ name: '', cost: '' });
        }
    };

    const handleDeleteMethod = (id) => {
        setShippingMethods(shippingMethods.filter(method => method.id !== id));
    };

    const handleEditMethod = (method) => {
        setCurrentMethod(method);
        setIsModalVisible(true);
    };

    const handleSaveEdit = () => {
        setShippingMethods(shippingMethods.map(method =>
            method.id === currentMethod.id ? currentMethod : method
        ));
        setIsModalVisible(false);
    };

    return (
        <div className="shipping-page">
            <h1><FaShippingFast /> Shipping Methods</h1>

            {/* Displaying the available shipping methods */}
            <div className="available-methods">
                <h2>Available Shipping Methods</h2>
                <ul>
                    {shippingMethods.map(method => (
                        <li key={method.id} className="method-item">
                            <span className="method-icon">{method.icon}</span>
                            <span>{method.name} - {method.cost}</span>
                            <button onClick={() => handleEditMethod(method)} className="btn edit-btn"><FaEdit /> Edit</button>
                            <button onClick={() => handleDeleteMethod(method.id)} className="btn delete-btn"><FaTrashAlt /> Delete</button>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Input for adding new shipping method */}
            <div className="add-method">
                <input 
                    type="text" 
                    placeholder="Shipping Method Name"
                    value={newMethod.name}
                    onChange={(e) => setNewMethod({ ...newMethod, name: e.target.value })}
                />
                <input 
                    type="text" 
                    placeholder="Cost"
                    value={newMethod.cost}
                    onChange={(e) => setNewMethod({ ...newMethod, cost: e.target.value })}
                />
                <button onClick={handleAddMethod} className="btn add-btn"><FaPlusCircle /> Add</button>
            </div>

            {/* Edit method modal */}
            {isModalVisible && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Edit Shipping Method</h2>
                        <input
                            type="text"
                            value={currentMethod.name}
                            onChange={(e) => setCurrentMethod({ ...currentMethod, name: e.target.value })}
                        />
                        <input
                            type="text"
                            value={currentMethod.cost}
                            onChange={(e) => setCurrentMethod({ ...currentMethod, cost: e.target.value })}
                        />
                        <button onClick={handleSaveEdit} className="btn save-btn">Save</button>
                        <button onClick={() => setIsModalVisible(false)} className="btn cancel-btn">Cancel</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Shipping;
