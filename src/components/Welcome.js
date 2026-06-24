import { useNavigate } from 'react-router-dom';

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="screen">
      <div className="mt-auto mb-auto">
        <h1>Welcome to PopX</h1>
        <p className="subtitle">share your ideas,and discover <br/> communities that match your interestsn</p>
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