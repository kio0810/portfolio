export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          Designed & Built by <strong>Kim Eunjung</strong> · © {new Date().getFullYear()}
        </div>
        <div>
          <code>{'<built with React />'}</code>
        </div>
      </div>
    </footer>
  );
}