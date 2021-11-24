export default function NotFoundView({ errorImage, messadge }) {
  return (
    <div role="alert">
      <img src={errorImage} alt="Error 404" />
      <p>{messadge}</p>
    </div>
  );
}
