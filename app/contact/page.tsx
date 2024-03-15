
export default function Home() {
  const onSubmit = async (e: any) => {
    e.preventDefault();

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: "John",
        lastName: "Doe",
        email: "g1mishra.dev@gmail.com",
        phone: "1234567890",
        typeOfEnquiry: "General",
        message: "Hello, I have a question about your services.",
        subject: "New Enquiry",
      }),
    });
    const result = await response.json();
    alert(result.message);
  };

  return (
    <form onSubmit={onSubmit} className="container">
      <div className="button block">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
