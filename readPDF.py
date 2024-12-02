import pypdf as pdf

keywords_arr = ['References', 'Bibliography', 'Works Cited']

def extract_text(pdf_file):
    with open(pdf_file, 'rb') as file:
        reader = pdf.PdfReader(file)
        text = ''
        for page_num in range(len(reader.pages)):
            page = reader.pages[page_num]
            text += page.extract_text()  
        return text

# Function to extract the section of text starting from the keyword arrays
def extract_section(text):
    for keyword in keywords_arr:
        keyword_start = text.lower().find(keyword.lower()) 
        if keyword_start != -1:
            start = keyword_start
            return text[start:]  
    
    return "I cannot find the references section in this document."


pdf_file = 'A_Survey_NLP_Natural_Language_Processing_and_Trans.pdf'

text = extract_text(pdf_file)
print(text) 

references_text = extract_section(text)
print(references_text)
