import React from 'react';

const booksRead2026 = [
  { title: 'Radha', author: 'Krishna Dharabasi', cover: 'https://shopratnaonline.com/wp-content/uploads/2023/04/Radha.jpeg' },
  { title: 'Ek sarko maya', author: 'GS Poudel', cover: 'https://shopratnaonline.com/wp-content/uploads/2021/09/Ek-Sarko-Maya.webp' },
  { title: 'Pagal basti', author: 'Saru Bhakta', cover: 'https://shopratnaonline.com/wp-content/uploads/2021/07/Pagal-Basti.jpg' },
  { title: 'Pahelpur', author: 'GS Poudel', cover: 'https://shopratnaonline.com/wp-content/uploads/2021/09/Pahelpur.webp' },
  { title: 'Palpasa Cafe', author: 'Narayan Wagle', cover: 'https://shopratnaonline.com/wp-content/uploads/2021/06/Palpasa-Cafe.jpeg' },
  { title: 'Sirish Ko phool', author: 'Parijat', cover: 'https://shopratnaonline.com/wp-content/uploads/2021/06/Shireesh-ko-Phool.jpeg' },
  { title: 'Modiaain', author: 'BP Koirala', cover: 'https://biblionepal.com/cdn/shop/products/modiaain-biblionepal.jpg?v=1664277263' },
];

const Research = () => {
  return (
    <section id="research" className="research-section">
      <div className="research-container">
        <h2 className="section-title">Research</h2>
        <div className="research-grid">
          <div className="research-card">
            <h4>Analysis of the Content of ChatGPT&apos;s Memory: Types of Information, Security Implications, and User Perception</h4>
    
            <p className="research-venue">Conference: 2025 48th MIPRO ICT and Electronics Convention (MIPRO) | Croatia</p>
            <p className="research-description">
              This research analyzes the content stored in ChatGPT&apos;s memory, examining the types of information retained, 
              the security implications of such storage, and user perceptions regarding privacy and data handling in AI systems.
            </p>
            <div className="research-links">
              <a href="https://www.researchgate.net/publication/393946465_Analysis_of_the_Content_of_ChatGPT's_Memory_Types_of_Information_Security_Implications_and_User_Perception" className="research-btn" target="_blank" rel="noopener noreferrer">ResearchGate</a>
              <a href="/01_19979_cis-4.pdf" className="research-btn" target="_blank" rel="noopener noreferrer">View Paper</a>
            </div>
          </div>

          <div className="research-card">
            <h4>Evaluating Output Novelty in Iterative Prompting in Educational Content Generation</h4>
            <p className="research-venue">Conference: 2025 17th International Conference on Education Technology and Computers (ICETC)</p>
            <p className="research-description">
              This research evaluates the novelty of outputs generated through iterative prompting techniques in educational content creation, examining how successive prompt refinements affect the originality and diversity of AI-generated educational materials.
            </p>
            <div className="research-links">
              <a href="https://www.researchgate.net/publication/396923717_Evaluating_Output_Novelty_in_Iterative_Prompting_in_Educational_Content_Generation" className="research-btn" target="_blank" rel="noopener noreferrer">ResearchGate</a>
              <a href="/ICETC_2025_Paper.pdf" className="research-btn" target="_blank" rel="noopener noreferrer">View Paper</a>
            </div>
          </div>

          <div className="research-card">
            <h4>Benchmarking LLMs for Content Expansion: Measuring Novelty in Iterative Course Outline Generation</h4>
            <p className="research-venue">Conference: 2025 Information Systems and Computing Academic Professionals (ISCAP)</p>
            <p className="research-description">
              This research benchmarks various Large Language Models (LLMs) for educational content expansion, specifically measuring novelty and effectiveness in iterative course outline generation. The study evaluates how different LLMs perform in generating diverse and novel educational content through successive iterations.
            </p>
            <div className="research-links">
              <a href="https://www.researchgate.net/publication/397504945_Benchmarking_LLMs_for_Content_Expansion_Measuring_Novelty_in_Iterative_Course_Outline_Generation" className="research-btn" target="_blank" rel="noopener noreferrer">ResearchGate</a>
              <a href="/ISCAP.pdf" className="research-btn" target="_blank" rel="noopener noreferrer">View Paper</a>
            </div>
          </div>
        </div>

        <div className="reading-list-section">
          <h3 className="reading-list-title">Books I read in 2026</h3>
          <div className="reading-books-grid">
            {booksRead2026.map((book, index) => (
              <article className="reading-book-card" key={book.title}>
                <img
                  src={book.cover}
                  alt={`${book.title} cover`}
                  className="reading-book-cover"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = 'https://cdn-icons-png.flaticon.com/512/29/29302.png';
                  }}
                />
                <p className="reading-book-rank">{index + 1}</p>
                <h4 className="book-name">{book.title}</h4>
                <p className="book-author">{book.author}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;

