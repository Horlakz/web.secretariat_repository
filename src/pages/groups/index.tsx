import Button from "@/components/ui/button";
import Input from "@/components/ui/form/input";
import { useRouter } from "@/router/router.hook";

const GroupsPage = () => {
  const router = useRouter();

  return (
    <div className="sm:p-10 p-6 divide-y divide-brand/60">
      <section className="space-y-4 pb-10">
        <p className="text-lg">
          These preset groups contain a hierarchy of levels from Level 1 to
          Level 4
        </p>

        <div className="flex flex-wrap md:justify-start justify-center gap-4">
          {[
            {
              id: "b5443ee3-a1e4-4e90-bfa9-7355c6d0a620",
              name: "Level 1",
              color: "#fcf9e3",
            },
            {
              id: "f834e322-7986-4171-a9da-566d7e4ae4ec",
              name: "Level 2",
              color: "#defce4",
            },
            {
              id: "8d4d5e50-7689-48b8-b47b-0257245f3199",
              name: "Level 3",
              color: "#d9f7f7",
            },
          ].map((item, i) => (
            <div
              key={i}
              style={{ background: item.color }}
              className="border shadow-md rounded-lg md:w-52 w-44 p-8 active:scale-90 select-none transition-all cursor-pointer"
              onClick={() => router.goTo(item.id)}
            >
              <h3 className="text-center text-2xl">{item.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* create a section to add a place to create new groups */}
      <section className="py-10">
        <h4 className="text-2xl font-medium">Discover New</h4>
        <p className="text-lg">
          You can also create a new group and assign users to it so you can have
          personalized groups apart from your level groups
        </p>

        <div className="mt-8 flex md:items-end md:flex-row flex-col gap-4">
          <Input label="Group Name"></Input>
          <Button
            onClick={() => router.goTo("c051e77f-8568-4102-8382-ddc9aeb96a33")}
          >
            <span className="md:text-left w-full text-center">
              Create Group
            </span>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default GroupsPage;
