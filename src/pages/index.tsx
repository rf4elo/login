
export default function Home() {
  return(
    <main className="flex items-center justify-center bg-zinc-300 w-screen h-screen">

      <div className="interface p-6 bg-white w-140 h-130 shadow-md shadow-zinc-500">
        <h1 className=" font-bold text-center text-blue-600 text-7xl" >Login</h1>

        <form>
          <div className="input-field" >
            <input type="text" required />
            <span>Username</span>
          </div>

          <div className="input-field">
            <input type="password" required />
            <span>Password</span>
          </div>
          <p className="flex justify-between w-full"> New here? <a href="#" className=" text-blue-600 hover:underline" >Create an account!</a> </p>

          <input className="send-btn" type="submit" value="Enter" />
        </form>

      </div>

    </main>
  )
}

