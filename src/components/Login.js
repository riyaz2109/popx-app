import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="screen">
      <h1>Signin to your<br/>PopX account</h1>
      <p className="subtitle">Lorem ipsum dolor sit amet,<br/>consectetur adipiscing elit.</p>

      <form onSubmit={(e) => { e.preventDefault(); navigate('/profile'); }}>
        <div className="input-group">
          <label>Email Address<span style={{ color: '#ff0000' }}>*</span></label>
          <input type="email" placeholder="Enter email address" required />
        </div>

        <div className="input-group">
          <label>Password<span style={{ color: '#ff0000' }}>*</span></label>
          <input type="password" placeholder="Enter password" required />
        </div>

        <button type="submit" className="btn btn-disabled mt-auto">
          Login
        </button>
      </form>
    </div>
  );
}