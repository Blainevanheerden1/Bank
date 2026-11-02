import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox';

const Home = () => {
  const loggedIn = { firstName: 'Blaine'};
  return (
    <section className="Home px-4">
      <div className="Home__content"> 

        <header className="Home-header">  

          <HeaderBox 
          type="greeting"
          title="Welcome"
          user={loggedIn ? loggedIn.firstName : 'Guest'}
          subtext="Access and manage your account and transactions efficiently."
          />

          <TotalBalanceBox 
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={1250.35}

          />
       </header>
      </div>
    </section>

    )

}

export default Home