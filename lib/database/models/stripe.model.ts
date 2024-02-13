import { Document, Schema, model, models } from "mongoose";

export interface IStripe extends Document {
    _id: string;
    customerId: string;
    subscriptionId: string;
    priceId: string;
    status: string;
    currentPeriodStart: Date;
    currentPeriodEnd: Date;
    cancelAtPeriodEnd: boolean;
    createdAt: Date;
}

const StripeSchema = new Schema({
    customerId: { type: String, required: true },
    subscriptionId: { type: String, required: true },
    priceId: { type: String, required: true },
    status: { type: String, required: true },
    currentPeriodStart: { type: Date, required: true },
    currentPeriodEnd: { type: Date, required: true },
    cancelAtPeriodEnd: { type: Boolean, required: true },
    createdAt: { type: Date, default: Date.now },
})

const Stripe = models.Stripe || model('Stripe', StripeSchema);

export default Stripe;