import Image from "@/components/ui/image";
import { useParams } from "@/router/router.hook";
import classNames from "classnames";

const GroupPage = () => {
  const {
    params: { id },
  } = useParams();

  return (
    <div className="p-5">
      <section className="flex bg-brand/10 border shadow-md shadow-gray-400 h-[86vh] rounded-xl">
        <div className="w-4/6">
          <div className="w-full flex items-center justify-start border-b border-brand py-4 px-6 gap-4">
            <Image gravatar="Group Name" size={44} rounded />
            <h4 className="text-xl font-semibold">Group Name</h4>
          </div>
        </div>
        <aside className="bg-brand/5 py-2 px-3 w-2/6 h-full border border-brand/10 rounded-l-3xl">
          <div className="flex-col-center divide-y divide-brand h-full">
            <h4 className="text-xl font-medium py-4 text-brand">
              Group Members
            </h4>
            <ul className="py-4 px-8 space-y-3 bg-brand/10 shadow-inner shadow-gray-300 rounded-lg h-full overflow-scroll">
              {[
                { name: "Diekoloreoluwa David", isUser: true },
                { name: "John Doe" },
                { name: "Jane Smith" },
                { name: "Michael Johnson" },
                { name: "Emily Davis" },
                { name: "Daniel Wilson" },
                { name: "Olivia Martinez" },
                { name: "David Anderson" },
                { name: "Sophia Taylor" },
                { name: "Matthew Thomas" },
                { name: "Emma Hernandez" },
              ].map((item, i) => (
                <li key={i}>
                  <div className="flex items-center gap-2">
                    <Image gravatar={item.name} size={44} rounded />
                    <span
                      className={classNames(
                        "text-lg text-ellipsis font-medium",
                        { "text-primary font-semibold": item.isUser }
                      )}
                    >
                      {item.isUser && "(You)"}&nbsp;{item.name}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>
    </div>
  );
};

export default GroupPage;
