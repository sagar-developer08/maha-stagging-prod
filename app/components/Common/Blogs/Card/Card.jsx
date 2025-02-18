import React from "react";
import { useRouter, usePathname } from "next/navigation";
import "./styles.scss";

function Card(props) {
  const router = useRouter();
  const pathname = usePathname();
  const lang = pathname.split("/")[1];
  const { title, short_des, category, readTime, thumb, route } = props;

  return (
    <div
      className={`BlogsCardHomepahg32 ${lang == "ar" ? "r_dir" : "l_dir"}`}
      key={props?.key}
    >
      <div className="cardFlight">
        <div className="imageWrapper">
          <img src={thumb} alt="blog_thumbnail" />
        </div>
        <div className="blogType">
          <div className="category">{category?.en}</div>
          <div className="readTime">{readTime?.en}</div>
        </div>
        <div className="details mt-3">
          <div className="sec-title">{title?.en}</div>

          <p className="para mt-2">{short_des?.en}</p>
        </div>

        <button
          className="btnNl btnNl-secondary"
          // onClick={() => router.push(`/${lang}/blog/${route}`)}
          onClick={() => router.push(`/blog/${route}`)}
        >
          Read More
        </button>
      </div>
    </div>
  );
}

export default Card;
