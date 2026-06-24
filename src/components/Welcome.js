import { useNavigate } from 'react-router-dom';

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="screen">
      <div className="mt-auto mb-auto">
        <h1>Welcome to PopX</h1>
        <p className="subtitle">Lorem ipsum dolor sit amet,<br/>consectetur adipiscing elit.</p>
      </div>
      
      <div>
        <button 
          className="btn btn-primary" 
          onClick={() => navigate('/register')}
        >
          Create Account
        </button>
        <button 
          className="btn btn-secondary" 
          onClick={() => navigate('/login')}
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
}