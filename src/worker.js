import { pipeline, env, AutoModelForSequenceClassification, AutoTokenizer } from "@xenova/transformers";

// Skip local model check
env.allowLocalModels = false;

class ClassificationPipeline {
    static task = 'text-classification';
    static model = 'syke9p3/bert-multilabel-tagalog-hate-speech-classifier';
    static instance = null;

    static async getInstance(progress_callback = null) {
        if (this.instance === null) {
            this.instance = pipeline(this.task, this.model, { progress_callback });
        }

        return this.instance;
    }
}


// Listen for messages from the main thread
self.addEventListener('message', async (event) => {
    // Retrieve the classification pipeline. When called for the first time,
    // this will load the pipeline and save it for future use.
    let classifier = await ClassificationPipeline.getInstance(x => {
        // We also add a progress callback to the pipeline so that we can
        // track model loading.
        self.postMessage(x);
    });

    // Actually perform the classification
    let output = await classifier(event.data.text);

    // Send the output back to the main thread
    self.postMessage({
        status: 'complete',
        output: output,
    });
});