import '../Signup/Signup.scss'

const Signin = () => {
  return (
    <section className='signup'>
      <div className='signup__textContainer'>
        <div className='signup__headingbox'>
          <h2 className='signup__heading'>Walletwise</h2>
          <h3 className='signup__subheading'>Financial Wisdom at Your Fingertips</h3>
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
          <h3 className='signup__title'>Sign in</h3>
          <div className='signup__textbox'>
          <p className='signup__text'>Don&apos;t have an account?</p>
          <a href="/signup" className='signup__link'>Sign up</a>
          </div>
        </div>
        <form action="">
          <div className='input__groups-row'>
            <div className='input__group-lg'>
              <label htmlFor="">Email</label>
              <input type="email" className='signup__text' />
            </div>
          </div>

          <div className='input__groups-row'>
            <div className='input__group-lg'>
              <label htmlFor="">Password</label>
              <input type="password" className='signup__text' />
            </div>
          </div>

          <div className='btn__group-lg'>
            <button type='submit' className='signup__btn'>Sign in</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Signin;