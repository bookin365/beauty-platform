import React from "react";

export default function PaymentsHistory() {
  const payments = [
    { id: "pmt_1", date: "2025-08-01", amount: "49 ₾", status: "Оплачен", plan: "Pro" },
    { id: "pmt_2", date: "2025-07-01", amount: "49 ₾", status: "Оплачен", plan: "Pro" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">История платежей</h1>
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left px-4 py-3">Дата</th>
              <th className="text-left px-4 py-3">План</th>
              <th className="text-left px-4 py-3">Сумма</th>
              <th className="text-left px-4 py-3">Статус</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((p) => (
              <tr key={p.id} className="border-t">
                <td className="px-4 py-3">{p.date}</td>
                <td className="px-4 py-3">{p.plan}</td>
                <td className="px-4 py-3">{p.amount}</td>
                <td className="px-4 py-3">
                  <span className="px-2 py-1 rounded bg-green-50 text-green-700">{p.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
