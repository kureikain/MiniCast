defmodule Mix.Tasks.Crawler.Refresh do
  use Mix.Task
  import Mix.Ecto

  #use SuperTiger.Crawler.Itunes.Home

  @shortdoc "Start refresh podcast data"

  @moduledoc """
  Parse itunes data, update category, sub link. feed
  """

  def run(args) do
    Mix.shell.info "Start procesing!"
    repos = parse_repo(args)

    Enum.each repos, fn repo ->
      ensure_repo(repo, args)
      ensure_started(repo, [{:pool_size, 10}])

      #SuperTiger.Crawler.Itunes.Home.get_category(repo)
      SuperTiger.Crawler.Itunes.Home.get_podcast(repo)
    end
  end


  # We can define other functions as needed here.
end
