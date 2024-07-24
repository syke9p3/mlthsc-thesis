# Multilabel Classification of Tagalog Hate Speech using Bidirectional Encoder Representations from Transformers (BERT)


> [!IMPORTANT]
> #### Announcement
> **A rework of this project's JS-based web app has been moved to** [https://github.com/syke9p3/retrain-mlthsc](https://github.com/syke9p3/retrain-mlthsc)

## 📋 About the Project

This repository contains source files for the thesis titled, **Multilabel Classification of Tagalog Hate Speech using Bidirectional Encoder Representations from Transformers (BERT)**, at the Polytechnic University of the Philippines. The model classifies a hate speech according to one or more categories: Age, Gender, Physical, Race, Religion, and Others. 

Hate speech encompasses expressions and behaviors that promote hatred, discrimination, prejudice, or violence against individuals or groups based on specific attributes, with consequences ranging from physical harm to psychological distress, making it a critical issue in today's society. 

Bidirectional Encoder Representations from Transformers (BERT) is pre-trained deep learning model used in this study that uses a transformer architecture to generate word embeddings, capturing both left and right context information, and can be fine-tuned for various natural language processing tasks. For this project, we fine-tuned [Jiang et. al.'s pre-trained BERT Tagalog Base Uncased model](https://huggingface.co/GKLMIP/bert-tagalog-base-uncased) in the task of multilabel hate speech classification.

### 👥 Proponents
- Saya-ang, Kenth G. ([@syke9p3](https://github.com/syke9p3))
- Gozum, Denise Julianne S. ([@Xenoxianne](https://github.com/Xenoxianne))
- Hamor, Mary Grizelle D. ([@mnemoria](https://github.com/mnemoria))
- Mabansag, Ria Karen B. ([@riavx](https://github.com/riavx))

### 📄 Abstract
Hate speech promotes hatred, discrimination, prejudice, or violence against individuals or groups based on specific attributes, leading to physical and psychological harm. This study addresses the prevalence of hate speech on social media by proposing a Tagalog hate speech multilabel classification model. Using a fine-tuned Bidirectional Encoder Representations from Transformers (BERT) model, the study classifies hate speech into categories such as Age, Gender, Physical, Race, Religion, and Others. Analyzing 2,116 manually annotated social media posts from Facebook, Reddit, and Twitter, the model achieved varying precision, recall, and f-measure scores across categories, with an overall hamming loss of 3.79%.

### 🔠 Keywords
*Bidirectional Encoder Representations from Transformers; Hate Speech; Multilabel Classification; Social Media; Tagalog; Polytechnic University of the Philippines; Bachelor of Science in Computer Science*

### 💻 Languages and Technologies

#### Model

[![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)
[![PyTorch](https://img.shields.io/badge/PyTorch-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white)](https://pytorch.org/)
[![Jupyter Notebook](https://img.shields.io/badge/Jupyter%20Notebook-F37626?style=for-the-badge&logo=jupyter&logoColor=white)](https://jupyter.org/)
[![Hugging Face](https://img.shields.io/badge/Hugging%20Face-FFD21E?style=for-the-badge&logo=huggingface&logoColor=white)](https://huggingface.co/)
[![Pandas](https://img.shields.io/badge/Pandas-150458?style=for-the-badge&logo=pandas&logoColor=white)](https://huggingface.co/)
[![Numpy](https://img.shields.io/badge/Numpy-013243?style=for-the-badge&logo=numpy&logoColor=white)](https://huggingface.co/)
[![Numpy](https://img.shields.io/badge/ScikitLearn-F7931E?style=for-the-badge&logo=numpy&logoColor=white)](https://huggingface.co/)


#### User Interface

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://en.wikipedia.org/wiki/HTML5)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://en.wikipedia.org/wiki/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://en.wikipedia.org/wiki/JavaScript)
[![Flask](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white)](https://flask.palletsprojects.com/en/3.0.x/)

### 🖼 Screenshots

<p align="center">
  <img src="./Screenshot1.jpg"/>
  <img src="./Screenshot2.jpg"/>
  <img src="./Screenshot3.jpg"/>
</p>


### 🎨 Labels

**Multilabel Classification** refers to the task of assigning one or more relevant labels to each text. Each text can be associated with multiple categories simultaneously, such as Age, Gender, Physical, Race, Religion, or Others.

| Label                                                        | Description                                                                                                      |
|--------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------|
| ![Age](https://img.shields.io/badge/Age-FE5555)             | Target of hate speech pertains to one's age bracket or demographic |
| ![Gender](https://img.shields.io/badge/Gender-F09F2D)       | Target of hate speech pertains to gender identity, sex, or sexual orientation |
| ![Physical](https://img.shields.io/badge/Physical-FFCC00)   | Target of hate speech pertains to physical attributes or disability |
| ![Race](https://img.shields.io/badge/Race-2BCE9A)   | Target of hate speech pertains to racial background, ethnicity, or nationality |
| ![Religion](https://img.shields.io/badge/Religion-424BFC)   | Target of hate speech pertains to affiliation, belief, and faith to any of the existing religious or non-religious groups |
| ![Others](https://img.shields.io/badge/Others-65696C)   | Target of hate speech pertains other topic that is not relevant as Age, Gender, Physical, Race, or Religion |

### 📜 Dataset
2,116 scraped social media posts from Facebook, Reddit, and Twitter manually annotated for determining labels for each data split into three sets: 

| Dataset        | Number of Posts | Percentage |
|----------------|-----------------|------------|
| Training Set   | 1,267           | 60%        |
| Validation Set | 212             | 10%        |
| Testing Set    | 633             | 30%        |

# Training

 The BERT Tagalog POS Tagger were trained using PyTorch library with the following hyperparameters set:

| **Hyperparamter**   |  **Value** |   
|---------------- |---------
| Batch Size      |  8 |
| Training Epoch  |  5 |
| Learning-rate   |  2e-5 |
| Optimizer       |  Adam |

### 🔢 Results

The testing set containing 633 annotated hate speech data used to analyze performance of the model in its ability to classify the hate speech input according to different label in terms of Precision, Recall, F-Measure, and overall hamming loss.

| Label    | Precision | Recall | F-Measure |
|----------|-----------|--------|-----------|
| Age      | 97.12%    | 90.18% | 93.52%    |
| Gender   | 93.23%    | 94.66% | 93.94%    |
| Physical | 92.23%    | 71.43% | 80.51%    |
| Race     | 90.99%    | 88.60% | 89.78%    |
| Religion | 99.03%    | 94.44% | 96.68%    |
| Others   | 83.74%    | 85.12% | 84.43%    |

**Overall Hamming Loss:** 3.79% 

## 🛠️ Installation

### 📦 Clone with git-lfs
Since this repo contains large data files (>= 50MB), you need to first download and install a git plugin called git-lfs for versioning large files, and set up Git LFS using command git lfs install in console, in order to fully clone this repo.

### 🏃 How to run 

#### Setup model

- Clone the repository:
```
git clone https://github.com/kenth9p3/mlthsc-thesis.git
```
- Create a virtual environment:
```
# Windows
python -m venv venv

# Linux
python3 -m venv venv
```
- Activate virtual environment:
```
# Windows
source venv/Scripts/activate

# Linux
source venv/bin/activate
```
- Install dependencies:
```
pip install -r requirements.txt
```
- Run app:
```
python ./server.py
```

#### Setup user interface

- Run `index.html` in the browser

- Input Tagalog hate speech in text box or choose one of the examples

- Click Analyze

- Save results

