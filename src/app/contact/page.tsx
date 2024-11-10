export default function Contact(){
    return (   
        <main className="container mx-auto p-4">   
        <section className="my-8 bg-purple-100 p-4 rounded-lg" id="contact">
         <h2 className="text-2xl font-bold mb-2"> Contact
        </h2>
        <p className="text-lg">
         Feel free to reach out to me via email or connect with me on social media.
        </p>
        <div className="flex space-x-4 mt-4">
         <a className="text-blue-600 hover:underline" href="mailto:asif.hussain@example.com">
          <i className="fas fa-envelope">
          </i>
          asif.hussain@example.com
         </a>
         <a className="text-blue-600 hover:underline" href="https://www.linkedin.com/in/asif-hussain">
          <i className="fab fa-linkedin">
          </i>
          LinkedIn
         </a>
         <a className="text-blue-600 hover:underline" href="https://github.com/asif-hussain">
          <i className="fab fa-github">
          </i>
          GitHub
         </a>
        </div>
       </section>
      </main>
    );
}
