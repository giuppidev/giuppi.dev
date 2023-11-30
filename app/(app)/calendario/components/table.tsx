import Link from "next/link";

const data = [
  {
    month: "Dicembre",
    masterclass: [
      {
        label: "Testing frontend con Cypress",
        slug: "cypress",
      },
    ],
  },
];

export default function Table({ events }: { events: any }) {
  const lessons = events.map((event: any) => ({
    ...event,
    month: getMonth(event.products.start_date),
  }));

  const tableData = lessons.reduce((tableData: any, prev: any) => {
    if (tableData[prev.month]) {
      tableData[prev.month].push(prev);
    } else {
      tableData[prev.month] = [prev];
    }
    return tableData;
  }, {});

  return (
    <table className="w-full [&>*>tr>th]:text-xl lg:[&>*>tr>th]:text-3xl [&>*>tr>th]:font-medium [&>*>tr>td]:text-sm lg:[&>*>tr>td]:text-xl">
      <thead>
        <tr>
          <th></th>
          <th className="border-x-2 border-gray-900">Masterclass</th>
          <th>Corso</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(tableData).map((month) => (
          <tr key={month}>
            <th className="border-y-2 border-gray-900 capitalize pr-1 lg:pr-8">
              {month}
            </th>
            <td className=" border-2 border-gray-900 py-4 px-1 lg:px-8">
              <ul className="list-inside list-disc space-y-2">
                {tableData[month].map((lesson: any) => {
                  if (lesson.products.product_type === "course") {
                    return;
                  }
                  return (
                    <li key={lesson.id}>
                      <Link
                        href={`/corsi/${lesson.products.slug}`}
                        className="hover:underline hover:cursor-pointer"
                      >
                        {lesson.products.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </td>
            {month === "gennaio" && (
              <td
                className=" border-2 border-gray-900 py-4 px-2 lg:px-8 text-center"
                rowSpan={2}
              >
                <Link
                  href={`/corsi/algoritmi-per-web-developers`}
                  className="hover:underline hover:cursor-pointer"
                >
                  Algoritmi per web developers
                </Link>
              </td>
            )}
            {month === "marzo" && (
              <td
                className=" border-2 border-gray-900 py-4 px-2 lg:px-8 text-center"
                rowSpan={2}
              >
                <Link
                  href={`/corsi/flutter`}
                  className="hover:underline hover:cursor-pointer"
                >
                  Flutter
                </Link>
              </td>
            )}
            {month === "maggio" && (
              <td
                className=" border-2 border-gray-900 py-4 px-2 lg:px-8 text-center"
                rowSpan={2}
              >
                <Link
                  href={`/corsi/qwik`}
                  className="hover:underline hover:cursor-pointer"
                >
                  Qwik
                </Link>
              </td>
            )}
            {month === "dicembre" && (
              <td className=" border-2 border-gray-900 py-4 px-2 lg:px-8 text-center"></td>
            )}
          </tr>
        ))}
        <tr>
          <th className="border-y-2 border-gray-900">Giugno</th>
          <td className=" border-2 border-gray-900 py-4 px-8">
            LIVE NOMAD WORKSHOPS
          </td>
        </tr>
      </tbody>
    </table>
  );
}

function getMonth(date: string) {
  const newDate = new Date(date);
  return newDate.toLocaleString("default", { month: "long" });
}

function getMonthCourseCol(month: string) {
  if (month === "gennaio") {
    return (
      <td
        className=" border-2 border-gray-900 py-4 px-2 lg:px-8 text-center"
        rowSpan={2}
      >
        <Link
          href={`/corsi/algoritmi-per-web-developers`}
          className="hover:underline hover:cursor-pointer"
        >
          Algoritmi per web developers
        </Link>
      </td>
    );
  }
  if (month === "marzo") {
    return (
      <td
        className=" border-2 border-gray-900 py-4 px-2 lg:px-8 text-center"
        rowSpan={2}
      >
        <Link
          href={`/corsi/flutter`}
          className="hover:underline hover:cursor-pointer"
        >
          Flutter
        </Link>
      </td>
    );
  }
  if (month === "maggio") {
    return (
      <td
        className=" border-2 border-gray-900 py-4 px-2 lg:px-8 text-center"
        rowSpan={2}
      >
        <Link
          href={`/corsi/qwik`}
          className="hover:underline hover:cursor-pointer"
        >
          Qwik
        </Link>
      </td>
    );
  }
  if (month === "dicembre") {
    return (
      <td className=" border-2 border-gray-900 py-4 px-2 lg:px-8 text-center"></td>
    );
  }
  return;
}
