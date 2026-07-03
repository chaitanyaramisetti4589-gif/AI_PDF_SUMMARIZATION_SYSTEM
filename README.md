# 📄 AI Document Summarization & Email Delivery Automation System

An AI-powered document summarization application built with **n8n**, **Groq AI**, and a custom **HTML/CSS/JavaScript frontend**. Users can upload a PDF document, receive an AI-generated summary, and have it delivered directly to their email.

---

## 🚀 Overview

This project automates the complete document summarization process.

Users simply:

1. Upload a PDF document
2. Enter their email address
3. Click **Summarize PDF**

The system automatically:

- Extracts text from the PDF
- Generates a structured AI summary
- Sends the summary via email
- Displays the processing status on the website

---

## ✨ Features

- 🌐 Modern web interface
- 📄 PDF upload
- 📧 Email input
- 🤖 AI-powered document summarization
- 📋 Structured summary generation
- 📩 Automatic email delivery
- ⚡ Real-time status updates
- 🔗 n8n Webhook integration
- 📅 Processing date included in the email

---

## 🛠 Tech Stack

### Frontend
- HTML5
- CSS3
- JavaScript

### Workflow Automation
- n8n

### AI Model
- Groq AI (Llama)

### Email Service
- Gmail

### Document Processing
- PDF Text Extraction

---

## 📂 Project Structure

```text
AI_PDF_SUMMARIZATION_SYSTEM/
│
├── FRONTEND/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── WORKFLOW/
│   └── workflow.json
│
├── SCREENSHOTS/
│   ├── workflow.png
│   ├── email.png
│   └── success-message.png
│
├── README.md
└── LICENSE
```

---

## 🔄 Workflow

```text
User
 │
 ▼
Frontend
 │
 ▼
n8n Webhook
 │
 ▼
Extract PDF Text
 │
 ▼
Groq AI
 │
 ▼
Generate Structured Summary
 │
 ▼
Send Email
 │
 ▼
Respond to Webhook
 │
 ▼
Frontend Displays Success Message
```

---

## 📧 Email Format

The generated email includes:

- 📄 Document Name
- 📅 Processing Date
- 📝 Summary
- 🔑 Key Points
- 📌 Important Decisions
- ✅ Action Items
- 📖 Conclusion

---

## 💼 Business Use Cases

- Meeting Minutes
- Business Reports
- Research Papers
- Company Policies
- Academic Notes
- Technical Documentation
- Internal Knowledge Base

---

## 📸 Screenshots

### Frontend

> Add a screenshot of the web interface.

### n8n Workflow

> Add a screenshot of the complete workflow.

### Summary Email

> Add a screenshot of the generated email.

### Success Message

> Add a screenshot showing the success response after processing.

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/chaitanyaramisetti4589-gif/AI_PDF_SUMMARIZATION_SYSTEM.git
```

### Configure n8n

- Import the workflow.
- Configure the Webhook node.
- Add your Groq API credentials.
- Configure Gmail credentials.

### Run the Frontend

Open the `FRONTEND` folder using **VS Code Live Server** or any local web server.

### Test the Application

1. Upload a PDF.
2. Enter your email.
3. Click **Summarize PDF**.
4. Receive the AI-generated summary in your inbox.

---

## 🎯 Future Improvements

- Drag & Drop PDF Upload
- OCR Support for Scanned PDFs
- Progress Bar
- Multiple File Upload
- Download Summary as PDF
- Multi-language Summaries
- Authentication
- Summary History Dashboard

---

## 👨‍💻 Author

**Chaitanya Ramisetti**

AI Automation Developer | AI Workflow Builder

---

## ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.
