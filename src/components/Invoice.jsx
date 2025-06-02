import React from "react";
import "../invoice.css";

const Invoice = () => {
  return (
    <div className="invoice-container">
      {/* Header: Logo + Title */}
      <div className="d-flex justify-content-between align-items-start">
        <img src="/millennium_logo.png" alt="Hospital Logo" className="invoice-logo" />

        <div className="text-center flex-grow-1 me-5">
          <h5 className="hospital-title">Millennium Specialized Hospital Ltd.</h5>
          <p className="hospital-address fw-bold">
            Ashraf Tower, 4/1 Walter Road, Sutrapur, Dhaka-1100
          </p>
          <strong className="helpline">HelpLine : 09639206020</strong>
        </div>
      </div>

      {/* ✅ Final Unified Row: Outdoor + Money Receipt + Barcode */}
      <div className="d-flex justify-content-between align-items-center border-top border-bottom py-1 mt-2">
        <div className="outdoor-box">Outdoor</div>

        <div className="text-center flex-grow-1 fw-bold">Money Receipt</div>

        <div className="barcode-placeholder text-end">
          <div className="barcode-line">||| || | ||| | ||</div>
          <div className="small">InvDate & Time: 27-05-25 07:01 pm</div>
        </div>
      </div>

      {/* Patient Info */}
      <div className="row mt-3">
        <div className="col">
          <p><b>Invoice No :</b> <span className="text-primary">DLS250500433</span></p>
          <p><b>Patient Name :</b> SELIM TALUKDER</p>
          <p><b>Patient Age :</b> 50Y 0M 20D</p>
          <p><b>Patient Email :</b> .</p>
          <p><b>Prescribed By :</b> MSH (DIALYSIS)</p>
        </div>
        <div className="col">
          <p><b>InvDate & Time :</b> 27-05-25 07:01 pm</p>
          <p><b>PatientID :</b></p>
          <p><b>Gender :</b> Male</p>
          <p><b>Cell No :</b> 01933107039</p>
          <p><b>RegNo :</b> <span className="text-primary">PR250500505</span></p>
        </div>
      </div>

      {/* Blue Tab Labels */}
      <div className="blue-tags my-2">
        {["CT-SCAN-MRI-301", "X-ray-302", "Sample Coll-303", "USG-304", "ECG-305", "ECHO-306"].map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>

      {/* Test Table */}
      <table className="table dotted-table table-sm text-center mb-1">
        <thead>
          <tr>
            <th className="fw-bold">SL</th>
            <th className="fw-bold">Code</th>
            <th className="fw-bold">Name of Test</th>
            <th className="fw-bold">Urgent</th>
            <th className="fw-bold">Delivery</th>
            <th className="fw-bold">Qty</th>
            <th className="fw-bold">Less</th>
            <th className="fw-bold">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr className="dotted-bottom-row">
            <td>1</td>
            <td>5023</td>
            <td>Dialysis (Negative)</td>
            <td>No</td>
            <td>27/05/2025</td>
            <td>1</td>
            <td>0</td>
            <td>3,000.00</td>
          </tr>
        </tbody>
      </table>

      {/* CollType + Totals + Entry Table Row */}
      <div className="row mt-2">
        {/* Left: CollType */}
        <div className="col-8">
          <table className="table table-bordered table-sm small mb-1">
            <thead>
              <tr>
                <th className="fw-bold">CollType</th>
                <th className="fw-bold">Amount</th>
                <th className="fw-bold">BankName</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>By Cash</td>
                <td>3,000</td>
                <td></td>
              </tr>
              <tr>
                <td>By Card</td>
                <td>0</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Right: Totals + Paid */}
        <div className="col-4 text-end">
          <p className="underline-text">Total: 3,000</p>
          <p className="underline-text">Less Amt (): 0</p>
          <p className="underline-text">Payable: 3,000</p>
          <p className="underline-text">Receive: 3,000</p>
          <div className="paid-block mt-1">Paid</div>
          <p className="mt-1"><b>Due Amt :</b> 0</p>
        </div>
      </div>

      {/* Entry Table: In Same Row */}
      <table className="table table-bordered table-sm mt-1 text-center small w-100">
        <thead>
          <tr>
            <th className="fw-bold">EntryTime</th>
            <th className="fw-bold">PostedBy</th>
            <th className="fw-bold">RefNo</th>
            <th className="fw-bold">Less</th>
            <th className="fw-bold">Coll</th>
            <th className="fw-bold">RetAmt</th>
            <th className="fw-bold">LessAdj</th>
            <th className="fw-bold">DueAdj</th>
            <th className="fw-bold">CashRtn</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>27/05/2025 7:01PM</td>
            <td>Shima</td>
            <td>DLS250500433</td>
            <td>0</td>
            <td>3000</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
        </tbody>
      </table>

      {/* Footer: Words + Print */}
      <p><b>In Word :</b></p>
      <p><b>Remarks :</b></p>
      <div style={{ height: "50px" }}></div>

      <div className="d-flex justify-content-between mt-2 small border-top pt-2">
        <p>Print Date & Time : 27-May-2025 7:36 pm</p>
        <p>Serve by : it</p>
      </div>
    </div>
  );
};

export default Invoice;
