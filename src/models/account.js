import mongoose from "mongoose";

const Schema = mongoose.Schema;

const db = mongoose.createConnection("mongodb://localhost:27017/iztapp")

const AccountSchema = new Schema({
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	type: {
		type: Number,
		required: true
	},
	salt: {
		type: Number,
		required: true,
		default: 10
	},
	passwordTry: {
		type: Number,
		required: true
	},
	isLocked: {
		type: Boolean,
		required: true,
		default: false
	},
	unlockHash: {
		type: String,
		required: true
	},
	lastLoginDate: {
		type: Date,
		required: false
	},
	creationDate: {
		type: Date,
		required: true,
		default: Date.now()
	}
});

export default db.model("account", AccountSchema);
