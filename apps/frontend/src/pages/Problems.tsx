"use client";
import TableProblems from "@/components/problems/ProblemsTable";
import Stats from "@/components/problems/Stats";
import ProblemFilters from "@/components/problems/ProblemFilters";
import { useQuery } from "@tanstack/react-query";
import { apiGet } from "@/services/api";

export default function Problems() {
  const fetchData = async () => {
    try {
      const data = await apiGet("/problems");
      return data; // Повертаємо дані, щоб useQuery їх отримав
    } catch (error) {
      console.error("Failed to fetch data:", error);
      throw error; // Важливо кидати помилку, якщо щось пішло не так
    }
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ["test"], // Використовуємо queryKey для ключа запиту
    queryFn: fetchData, // Вказуємо функцію, що отримує дані
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  console.log(data);
  return (
    <div className="mt-10 px-10">
      <div className="flex flex-col gap-4">
        <ProblemFilters />
        <div className="">
          <div className="flex gap-4">
            <TableProblems />
            <div>
              <Stats />
            </div>
            <div>
              <h1>Data1</h1>
              {JSON.stringify(data)}
              <pre>{JSON.stringify(data)}</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
