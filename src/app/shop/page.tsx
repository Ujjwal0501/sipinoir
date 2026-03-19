import { redirect } from "next/navigation";

const shopUrl = "https://shop.sipinoir.com/collections/latest-launch";

export default function ShopPage() {
  redirect(shopUrl);
}
