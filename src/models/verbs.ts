import mongoose, { Document, Schema } from "mongoose";

export interface VerbInterface extends Document {
    title: string;
    meaning: string;
    pathImg: string;
    infinitive: string;
    simplePast: string;
    pastParticiple: string;
    category: string;
    verbTypes: Array<{}>;
    examples: string[];
}

const VerbSchema: Schema = new Schema({
    title: {
        type: String,
        required: true,
        default: null,
    },
    meaning: {
        type: String,
        required: true,
        default: null,
    },
    pathImg: {
        type: String,
        required: true,
        default: null,
    },
    infinitive: {
        type: String,
        required: true,
        default: null,
    },
    simplePast: {
        type: String,
        required: true,
        default: null,
    },
    pastParticiple: {
        type: String,
        required: true,
        default: null,
    },
    category: {
        type: String,
        required: true,
        default: null,
    },
    verbTypes: {
        type: Array,
        required: true,
        default: null,
    },
    examples: {
        type: Array,
        required: true,
        default: null,
    },
});

const Verb = mongoose.model<VerbInterface>("Verb", VerbSchema);

export default Verb;
