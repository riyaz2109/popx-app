import { useNavigate } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate();

  return (
    <div className="screen">
      <h1>Create your<br/>PopX account</h1>

      <form onSubmit={(e) => { e.preventDefault(); navigate('/profile'); }} style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div className="input-group">
          <label>Full Name<span style={{ color: '#ff0000' }}>*</span></label>
          <input type="text" placeholder="Marry Doe" required />
        </div>

        <div className="input-group">
          <label>Phone number<span style={{ color: '#ff0000' }}>*</span></label>
          <input type="tel" placeholder="Marry Doe" required />
        </div>

        <div className="input-group">
          <label>Email address<span style={{ color: '#ff0000' }}>*</span></label>
          <input type="email" placeholder="Marry Doe" required />
        </div>

        <div className="input-group">
          <label>Password<span style={{ color: '#ff0000' }}>*</span></label>
          <input type="password" placeholder="Marry Doe" required />
        </div>

        <div className="input-group">
          <label>Company name</label>
          <input type="text" placeholder="Marry Doe" />
        </div>

        <div className="radio-group">
          <span className="radio-label">Are you an Agency?<span style={{ color: '#ff0000' }}>*</span></span>
          <div className="radio-options">
            <label>
              <input type="radio" name="agency" value="yes" required defaultChecked /> Yes
            </label>
            <label>
              <input type="radio" name="agency" value="no" /> No
            </label>
          </div>
        </div>

        <button type="submit" className="btn btn-primary mt-auto">
          Create Account
        </button>
      </form>
    </div>
  );
}