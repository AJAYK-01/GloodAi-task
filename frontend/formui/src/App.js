import './App.css';

function App() {

  const req = (e) => {
    e.preventDefault();

    let email = e.target.elements.email?.value;
    let name = e.target.elements.name?.value;

    let data = { name: name, email: email }

    console.log(email + ' ' + name);


    fetch("http://127.0.0.1:8000/addsub/",
      { method: 'POST', body: JSON.stringify(data) }
    ).then(res => {
      if (res.ok) {
        res.json();
      } else {
        alert("Susbcription Error");
      }
    })
      .then(data => alert("Subscription Success"));

    window.location.reload();
  }

  return (
    <div className='h-screen flex bg-gray-bg1'>
      <div className='w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16'>
        <h1 className='text-2xl font-medium text-primary mt-4 mb-12 text-center'>
          Subscribe to our Newsletter 🚀🚀🚀
        </h1>

        <form onSubmit={req}>
          <div>
            <label htmlFor='name'>Name</label>
            <input
              type='name'
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              id='name'
              placeholder='Your Name'
            />
          </div>
          <div>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              id='email'
              placeholder='Your Email'
            />
          </div>

          <div className='flex justify-center items-center mt-6'>
            <button
              className={`bg-green-500 py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark`}
            >
              Susbcribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
