import Detail from "@/components/Detail";
import { useRouter } from "next/router";

const DetailPage = () => {
	const router = useRouter();
	const slug = router.query.slug;
	const pid = slug ? slug[1] : "";
	return <Detail pid={pid} />;
};

export default DetailPage;
