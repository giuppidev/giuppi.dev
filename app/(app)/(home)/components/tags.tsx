import { Database } from "@/types/supabase";

type Tag = Database["public"]["Tables"]["products"]["Row"]["tags"];

export function Tags({ tags }: { tags: Tag }) {
  return (
    <div className="flex gap-2 flex-wrap">
      {tags?.map((tag, key) => {
        const rnd = Math.floor(Math.random() * colors.length);

        return (
          <div
            key={key}
            className={`${colors[key]} shadow-[5px_5px_0px_0px_#000] px-2 py-1 rounded-full border-4 border-gray-900  font-medium text-xs`}
          >
            {tag}
          </div>
        );
      })}
    </div>
  );
}

const colors = ["bg-yellow-200", "bg-green-200", "bg-red-200", "bg-blue-200"];
