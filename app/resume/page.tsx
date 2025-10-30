export default function Resume() {
    // You can adjust the width and height to fit your desired layout
    const pdfUrl = "resume.pdf"; 

    return (
        <main style={{ padding: '40px', textAlign: 'center' }}>
            <h1>My Resume</h1>
            <p>You can find my professional experience here.</p>
            
            <div style={{ margin: 'auto', width: '80%', height: '100vh' }}>
                <iframe
                    src={pdfUrl}
                    style={{
                        width: '100%',
                        height: '100%',
                        border: 'none',
                        // Optional: Allows the user to download the file directly from the viewer
                        // Note: Functionality varies by browser
                        // frameBorder="0" 
                    }}
                    title="My Resume PDF Viewer"
                >
                    {/* Fallback content for browsers that don't support iframes */}
                    <p>
                        It looks like your browser doesn't support embedded PDFs. 
                        You can <a href={pdfUrl} target="_blank" rel="noopener noreferrer">download the resume here</a>.
                    </p>
                </iframe>
            </div>
        </main>
    );
}