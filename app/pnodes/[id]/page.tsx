interface Props {
  params: { id: string }
}

export default function PNodeDetailPage({ params }: Props) {
  return (
    <main className="p-8">
      <h1 className="text-xl font-bold">
        pNode Detail
      </h1>
      <p className="text-gray-600">
        pNode ID: {params.id}
      </p>
    </main>
  );
}
