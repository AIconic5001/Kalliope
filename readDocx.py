import docx

def extract_references_from_word(docx_path):
    references_text = ""
    references_found = False

    # Open the Word document
    doc = docx.Document(docx_path)
    
    # Iterate through paragraphs
    for paragraph in doc.paragraphs:
        text = paragraph.text.strip()
        
        # Check if the paragraph contains "References" or "Bibliography"
        if 'References' in text or 'Bibliography' in text:
            references_found = True
        
        # If the references section is found, start appending the text
        if references_found:
            references_text += text + '\n'
    
    return references_text

# Usage example
docx_file = "your_word_file.docx"
references = extract_references_from_word(docx_file)

if references:
    print("References Section Extracted:")
    print(references)
else:
    print("No References section found.")
