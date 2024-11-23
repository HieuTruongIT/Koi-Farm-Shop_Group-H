import React, { useState } from 'react';
import { FaCreditCard, FaPaypal, FaStripe, FaPlusCircle, FaEdit, FaTrashAlt } from 'react-icons/fa';
import './PaymentMethods.css';

const PaymentMethods = () => {
    const [paymentMethods, setPaymentMethods] = useState([
        { id: 1, name: 'Credit Card', icon: <FaCreditCard /> },
        { id: 2, name: 'PayPal', icon: <FaPaypal /> },
        { id: 3, name: 'Stripe', icon: <FaStripe /> },
    ]);

    const [newMethod, setNewMethod] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [currentMethod, setCurrentMethod] = useState(null);

    const handleAddMethod = () => {
        if (newMethod.trim() !== '') {
            const newMethodObj = {
                id: Date.now(),
                name: newMethod,
                icon: <FaCreditCard />, // You can allow users to select icons later
            };
            setPaymentMethods([...paymentMethods, newMethodObj]);
            setNewMethod('');
        }
    };

    const handleDeleteMethod = (id) => {
        setPaymentMethods(paymentMethods.filter(method => method.id !== id));
    };

    const handleEditMethod = (method) => {
        setCurrentMethod(method);
        setIsModalVisible(true);
    };

    const handleSaveEdit = () => {
        setPaymentMethods(paymentMethods.map(method =>
            method.id === currentMethod.id ? currentMethod : method
        ));
        setIsModalVisible(false);
    };

    return (
        <div className="payment-methods-page">
            <h1><FaCreditCard /> Payment Methods</h1>

            {/* Displaying the available payment methods */}
            <div className="available-methods">
                <h2>Available Payment Methods</h2>
                <ul>
                    {paymentMethods.map(method => (
                        <li key={method.id} className="method-item">
                            <span className="method-icon">{method.icon}</span>
                            <span>{method.name}</span>
                            <button onClick={() => handleEditMethod(method)} className="btn edit-btn"><FaEdit /> Edit</button>
                            <button onClick={() => handleDeleteMethod(method.id)} className="btn delete-btn"><FaTrashAlt /> Delete</button>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Input for adding new payment method */}
            <div className="add-method">
                <input 
                    type="text" 
                    placeholder="Add new payment method"
                    value={newMethod}
                    onChange={(e) => setNewMethod(e.target.value)}
                />
                <button onClick={handleAddMethod} className="btn add-btn"><FaPlusCircle /> Add</button>
            </div>

            {/* Edit method modal */}
            {isModalVisible && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Edit Payment Method</h2>
                        <input
                            type="text"
                            value={currentMethod.name}
                            onChange={(e) => setCurrentMethod({ ...currentMethod, name: e.target.value })}
                        />
                        <button onClick={handleSaveEdit} className="btn save-btn">Save</button>
                        <button onClick={() => setIsModalVisible(false)} className="btn cancel-btn">Cancel</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PaymentMethods;
