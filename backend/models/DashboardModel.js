// Định nghĩa Schema
const CustomerSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    address: String,
});

const ProductSchema = new mongoose.Schema({
    Ten: { type: String, required: true },
    Mota: { type: String },
    Gioitinh: { type: String },
    Tuoi: { type: Number },
    Kichthuoc: { type: String },
    Nguongoc: { type: String },
    quantity_in_stock: { type: Number, default: 0 },
    Gia: { type: Number, required: true }
});

const OrderSchema = new mongoose.Schema({
    customer_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
    products: [
        {
            product_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
            quantity: Number,
        },
    ],
    total_amount: Number,
    order_date: { type: Date, default: Date.now },
});


// Tạo Model
const Customer = mongoose.model('Customer', CustomerSchema);
const Product = mongoose.model('Product', ProductSchema);
const Order = mongoose.model('Order', OrderSchema);
module.exports={Customer, Product,Order};