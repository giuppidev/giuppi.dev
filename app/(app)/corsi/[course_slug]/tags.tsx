import { Database } from "@/types/supabase";

type Tag = Database["public"]["Tables"]["products"]["Row"]["tags"];

export function Tags({ tags }: { tags: Tag }) {
  return (
    <div className="flex gap-4 flex-wrap">
      {tags?.map((tag, key) => {
        const rnd = Math.floor(Math.random() * colors.length);

        return (
          <div
            key={key}
            className={`${colors[rnd]} shadow-[5px_5px_0px_0px_#000] px-2 py-1 rounded-full border-4 border-gray-900  font-semibold`}
          >
            {tag}
          </div>
        );
      })}
    </div>
  );
}

const colors = [
  "bg-red-300",
  "bg-pink-300",
  "bg-yellow-300",
  "bg-green-400",
  "bg-lime-400",
  "bg-blue-200",
];
