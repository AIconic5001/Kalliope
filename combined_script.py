import os
import pypdf as pdf
import docx

keywords_arr = ['References', 'Bibliography', 'Works Cited']

# PDF file
def extract_text_from_pdf(pdf_file):
    with open(pdf_file, 'rb') as file:
        reader = pdf.PdfReader(file)
        text = ''
        for page_num in range(len(reader.pages)):
            page = reader.pages[page_num]
            text += page.extract_text()
        return text

# Word file
def extract_text_from_docx(docx_file):
    doc = docx.Document(docx_file)
    text = ''
    for paragraph in doc.paragraphs:
        text += paragraph.text + '\n'
    return text

def extract_section(text):
    for keyword in keywords_arr:
        keyword_start = text.lower().find(keyword.lower())
        if keyword_start != -1:
            start = keyword_start
            return text[start:]
    
    return "I cannot find the references section in this document."

def extract_references(file_path):
    file_extension = os.path.splitext(file_path)[1].lower()
    if file_extension == '.pdf':
        print(f"Extracting from PDF: {file_path}")
        text = extract_text_from_pdf(file_path)
    elif file_extension == '.docx':
        print(f"Extracting from Word file: {file_path}")
        text = extract_text_from_docx(file_path)
    else:
        return "Unsupported file format. Please provide a PDF or Word document."
    
    references_text = extract_section(text)
    return references_text

file_path = '2410.05243v1.pdf'  
references_text = extract_references(file_path)
print("References Section Extracted:")
print(references_text)
