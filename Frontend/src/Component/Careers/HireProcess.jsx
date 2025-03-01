import "./HireProcess.css";

export default function HireProcess() {
  return (
    <div className="hire-container">
      <div className="hire-content">
        <hr className="hire-divider" />
        <p className="hire-heading">Our Hiring Process</p>
        <div className="hire-grid">
          <div className="hire-card">
            <h2>No resume required</h2>
            <p>
              Instead, we’ll learn about your interest and fit for the role through a few targeted short answer questions.
            </p>
          </div>
          <div className="hire-card">
            <h2>Structured Interviews FTW</h2>
            <p>
              We evaluate everyone for the qualifications listed in the job description and values fit. We want to see you at your best and fairly compare all candidates, so we’ll tell you our interview questions in advance! Bet you didn’t see that coming.
            </p>
          </div>
          <div className="hire-card">
            <h2>Work with us</h2>
            <p>
              For candidates that make it to the final round, we’ll ask you to spend 5-10 hours collaborating with us on a mock assessment using a scrubbed data set. We believe seeing your work output is the best way to evaluate your qualifications. We also believe in fairness, so we’ll pay you for your time and contribution.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
