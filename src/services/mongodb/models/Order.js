import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    products:[{
        product:{
            type: mongoose.Schema.Types.ObjectId,
             ref: "Product"
        },
        quantity:{
            type: Number,
            default: 1
        }
        
    }],
    total:{
        type: Number,
        required: true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    address:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Address"
    },
    status:{
        type: String,
        enum: ["Order Placed", "Order Confirmed", "Order Shipped", "Order Delivered","Order Cancelled"],
    }

       
})

OrderSchema.pre("save",async function(next){
    try{
        console.log(this)
        //this will correspond to the other product
        //update the stock value of the product
    } catch(error){
        next(error)
    }
})

OrderSchema.statics = {
    isValid(id){
        return this.findById(id).then(result =>{
            if(!result) throw new Error("Order not found")
        })
    }
}
export const Order = mongoose.model("Order", OrderSchema);