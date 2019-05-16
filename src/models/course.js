import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CourseSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	prerequisites: {
		type: {
			type: [Schema.Types.ObjectId],
			ref: "course"
		},
		required: false
	},
	pagePath: {
		type: String,
		required: true
	},
	courseCode: {
		type: String,
		required: false
	},
	departmentCode: {
		type: String,
		required: true
	},
	topics: {
		type: [String],
		required: true
	},
	type: {
		type: Number,
		required: true
	},
	workers: {
		type: {
			type: [Schema.Types.ObjectId],
			ref: "worker"
		},
		required: true
	},
	lectureHours: {
		type: Number,
		required: true
	},
	labHours: {
		type: Number,
		required: true
	},
	credits: {
		type: Number,
		required: true
	},
	ects: {
		type: Number,
		required: true
	},
	isOffered: {
		type: Boolean,
		default: false,
		required: true
	},
	creationDate: {
		type: Date,
		required: true,
		default: Date.now()
	}
});

export default mongoose.model("course", CourseSchema);