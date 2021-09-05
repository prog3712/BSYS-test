import { render } from "@testing-library/react";
import Table from "./index";

test("renders the Table component", () => {
  const mockColumns = [
    {
      Header: "Test Header",
      columns: [
        {
          Header: "ID",
          accessor: "id",
        },
        {
          Header: "Test Data",
          accessor: "test",
        },
      ],
    },
  ];

  const mockData = [
    { id: "1", test: "Test 1" },
    { id: "2", test: "Test 2" },
  ];
  const table = render(<Table columns={mockColumns} data={mockData} />);
  expect(table).toMatchSnapshot();
});
