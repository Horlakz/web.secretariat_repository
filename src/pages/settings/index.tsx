import Image from "@/components/ui/image";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { PiPhoneLight } from "react-icons/pi";
import { useGetUserDetails } from "../users/users.hook";

const SettingsPage = () => {
  const user = useGetUserDetails();

  return (
    <div className="px-12 py-8">
      <section className="flex sm:flex-row flex-col items-center gap-10">
        <Image gravatar="John Doe" size={140} rounded />
        <div className="space-y-2 sm:block flex flex-col items-center">
          {user.isLoading && (
            <h3 className="text-5xl text-gray-400">Loading...</h3>
          )}
          {user.isSuccess && (
            <h3 className="text-5xl">
              {user.data?.data.firstName + " " + user.data?.data.lastName}
            </h3>
          )}
          <p className="text-brand font-semibold text-lg">
            Faculty of Engineering
          </p>
        </div>
      </section>

      <section className="py-10 space-y-6">
        <h4 className="text-brand font-semibold text-2xl">
          Contact Information
        </h4>

        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <HiOutlineEnvelope size={32} />

            <div className="grid gap-2">
              <span className="font-semibold">Email</span>
              {user.isLoading && (
                <div className="w-44 h-4 bg-brand/30 rounded-full animate-pulse" />
              )}
              {user.isSuccess && (
                <p className="text-brand">{user.data?.data.email}</p>
              )}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <PiPhoneLight size={32} />

            <div className="grid gap-2">
              <span className="font-semibold">Phone Number</span>
              {user.isLoading && (
                <div className="w-44 h-4 bg-brand/30 rounded-full animate-pulse" />
              )}
              {user.isSuccess && (
                <p className="text-brand">{user.data?.data.phoneNumber}</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SettingsPage;
