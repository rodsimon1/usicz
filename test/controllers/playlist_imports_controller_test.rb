require 'test_helper'

class PlaylistImportsControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get playlist_imports_new_url
    assert_response :success
  end

  test "should get create" do
    get playlist_imports_create_url
    assert_response :success
  end

end
