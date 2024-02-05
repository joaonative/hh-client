interface ReportCardProps {
  author?: string;
  imageUrl?: string;
  report: string;
}

function ReportCard({ author, imageUrl, report }: ReportCardProps) {
  return (
    <div className="lg:col-span-1 col-span-3 row-span-3 bg-darker p-5 rounded-lg flex flex-col gap-4 h-max">
      <div className="flex gap-3 items-center justify-start w-full">
        <img
          src={imageUrl}
          alt="User profile picture"
          className="h-8 w-8 rounded-full"
        />
        <h2 className="lg:w-80 w-30 text-xl text-start">{author}</h2>
      </div>
      <article className="text-base text-half_text w-full lg:h-32 break-words">
        {report}
      </article>
    </div>
  );
}

export default ReportCard;
