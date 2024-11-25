import './Signup.scss'
import walletwise_logo from '../../assets/WalletWise.png'

const Signup = () => {
  return (
    <section className='signup'>
      <div className='signup__textContainer'>
        <div className='signup__headingbox'>
          <div className='signup__logoContainer'>
            <img src={walletwise_logo} alt="wallet wise logo" className='signup__logo' />
          </div>
          <div>
          <h2 className='signup__heading'>Walletwise</h2>
          <h3 className='signup__subheading'>Financial Wisdom at Your Fingertips</h3>
          </div>
          <div className='signup__descriptionbox'>
            <p className='signup__description'>
              WalletWise simplifies the process of tracking your spending. With easy categorization, visual reports, 
              and personalized budgeting tools, managing your money has never been easier.
            </p>
          </div>
        </div>
      </div>
      <div className='signup__formContainer'>
        <div className='signup__formbox'>
          <h3 className='signup__title'>Sign up</h3>
          <div className='signup__textbox'>
          <p className='signup__text'>Already have an account?</p>
          <a href="/" className='signup__link'>Sign in</a>
          </div>
        </div>
        <form action="">
          <div className='input__groups-row'>
            <div className='input__group-lg'>
              <label htmlFor="">Full Name</label>
              <input type="text" className='signup__text' />
            </div>
          </div>

          <div className='input__groups-row'>
            <div className='input__group-sm'>
              <label htmlFor="">Email</label>
              <input type="email" className='signup__text' />
            </div>
            <div className='input__group-sm'>
              <label htmlFor="">Phone</label>
              <input type="tel" className='signup__text' />
            </div>
          </div>

          <div className='input__groups-row'>
            <div className='input__group-sm'>
              <label htmlFor="">Password</label>
              <input type="password" className='signup__text' />
            </div>

            <div className='input__group-sm'>
              <label htmlFor="">Confirm password</label>
              <input type="password" className='signup__text' />
            </div>
          </div>

          <div className='btn__group-lg'>
            <button type='submit' className='signup__btn'>Sign up</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Signup;