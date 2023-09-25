export default interface PublicationPfpData
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  className: string;
  id: string;
  alreadysanitized: string;
}
