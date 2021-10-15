import { Schema } from "mongoose";

const customerSchema = new Schema(
  {
    name: String,
    username: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: String,
    messages: [
      {
        text: String,
        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  { timestamps: true }
);

customerSchema.pre("save", function (next) {
  const customer = this;

  if (customer.isModified("password")) {
    customer.password = hashPassword(customer.password);
  }

  next();
});

export default model(Customer, customerSchema);
