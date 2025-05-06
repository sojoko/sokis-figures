
function Footer() {

  return (
    <div className='pt-4 flex w-full justify-center lg:justify-end items-end dark:bg-gray-800 transition-colors duration-200' data-testid="footer">
      <a href="https://sojoj.com/" data-testid="footer-link" target="_blank" rel="noopener noreferrer">
        <p className='mb-6 lg:mr-24 text-pink-500 dark:text-pink-400 text-lg font-bold' data-testid="footer-author-text">Hecho por Jonhathan Sojo</p>
      </a>
    </div>
  );
}

export { Footer };
